from flask import Flask, request


def register_cors(app: Flask, origins: tuple[str, ...]) -> None:
    @app.after_request
    def apply_cors(response):
        origin = request.headers.get("Origin")
        if origin and origin in origins:
            response.headers["Access-Control-Allow-Origin"] = origin
            response.headers["Vary"] = "Origin"
            response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
            response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        if request.method == "OPTIONS":
            return ("", 204)
        return response
