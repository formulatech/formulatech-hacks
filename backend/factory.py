from flask import Flask, jsonify

from backend.config import Config, load_config
from backend.extensions import init_extensions
from backend.middleware.cors import register_cors
from backend.middleware.request_id import register_request_id
from backend.routes import register_blueprints


def create_app(config: Config | None = None) -> Flask:
    cfg = config or load_config()
    app = Flask(__name__)
    app.config["SECRET_KEY"] = cfg.secret_key
    app.config["APP_CONFIG"] = cfg
    app.debug = cfg.debug

    init_extensions(app)
    register_request_id(app)
    register_cors(app, cfg.cors_origins)
    register_blueprints(app, cfg.api_prefix)

    @app.get("/")
    def root():
        mode = "debug" if cfg.debug else "production"
        return jsonify({"name": cfg.name, "mode": mode, "api": cfg.api_prefix})

    return app
