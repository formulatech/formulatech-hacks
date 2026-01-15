from flask import Blueprint, current_app, jsonify

bp = Blueprint("health", __name__)


@bp.get("/health")
def health():
    cfg = current_app.config["APP_CONFIG"]
    return jsonify(
        {
            "status": "ok",
            "service": cfg.name,
            "mode": "debug" if cfg.debug else "production",
        }
    )


@bp.get("/ready")
def ready():
    store = current_app.extensions.get("store")
    return jsonify({"ready": store is not None})
