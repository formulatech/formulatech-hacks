import uuid

from flask import Flask, g, request


def register_request_id(app: Flask) -> None:
    @app.before_request
    def assign_request_id() -> None:
        incoming = request.headers.get("X-Request-ID")
        g.request_id = incoming or str(uuid.uuid4())

    @app.after_request
    def attach_request_id(response):
        response.headers["X-Request-ID"] = g.get("request_id", "")
        return response
