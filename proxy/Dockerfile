FROM envoyproxy/envoy:v1.20.0

ARG MONO_WEBHOOK_SECRET

COPY ./envoy.yaml /etc/envoy/envoy.yaml

RUN sed -i s/\$MONO_WEBHOOK_SECRET/${MONO_WEBHOOK_SECRET}/g /etc/envoy/envoy.yaml

RUN chmod go+r /etc/envoy/envoy.yaml

RUN mkdir -p /protobin

WORKDIR /protobin

COPY app.pb .

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace
