OUT := interface/
PROXY_OUT := ./proxy/
bin := $(shell yarn bin)
PROTOC="${bin}/grpc_tools_node_protoc"
PROTOC_GEN_TS_PATH="${bin}/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="${bin}/grpc_tools_node_protoc_plugin"

export DB_URL?=mongodb://mongo:27017/mono-assessment
export APP_PORT?=0.0.0.0:55055
export JWT_X?=USbbEzTvufX8GdiZ5EGNSMfPyiNO3tmm1fZo760BXlo
export JWT_Y?=X9Y6IqF189K-yLMYg2r73_0txArC3f36gk6YjEVYCLg
export JWT_D?=S1fBo8cI4EgSFZYG1EAgxHaKZHmhrnIc6cR2HOBpl9c
export JWT_KID?=qmlQBc5oBZ29mldczfQyIAtJqPo1s3WZNuIOOI9BArk
export MONO_KEY?=61dcb6e6bbe2010771c0daa0
export MONO_WEBHOOK_SECRET?=sec_O6BoCzjS4PQ1ut85QpBA

.PHONY: app
app:
	@docker-compose up --build mongo app sidecar

local:
	@DB_URL=mongodb://localhost:27017/mono-assessment yarn start

.PHONY: build
build: build-bin build-node clean-node

build-bin:
	@protoc -I=./googleapis -I=. \
		--include_imports --include_source_info --descriptor_set_out=${PROXY_OUT}/app.pb \
		interface/app.proto; \

ensure:
	@yarn install

build-node:
	@cd interface && ${PROTOC} \
		-I="../interface" \
		-I="../googleapis" \
		--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
		--plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
		--js_out=import_style=commonjs,binary:../${OUT} \
		--grpc_out=grpc_js:../${OUT} \
		--ts_out=service=grpc-node,mode=grpc-js:../${OUT} \
		app.proto

clean-node:
ifeq (Darwin, $(shell uname -s))
	@cd interface && for i in $(shell ls interface | grep -P "\.(j|t)s$$"); do \
		sed -i '' '/google_api_annotations_pb/d' $$i; \
	done
	@cd interface && for i in $(shell ls interface | grep -P "\.(j|t)s$$"); do \
		sed -i '' '/google_api_annotations_pb/d' $$i; \
	done
else
	@cd interface && for i in $(shell ls interface | grep -P "\.(j|t)s$$"); do \
		sed -i '/google_api_annotations_pb/d' $$i; \
	done
	@cd interface && for i in $(shell  ls interface | grep -P "\.(j|t)s$$"); do \
		sed -i '/google_api_annotations_pb/d' $$i; \
	done
endif

.PHONY: docs
docs:
	@docker-compose rm -s -f docs
	@docker-compose up --build docs
