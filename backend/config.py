import os
from dataclasses import dataclass


@dataclass(frozen=True)
class Config:
    name: str = "FormulaTech-Hacks"
    debug: bool = False
    secret_key: str = "dev-change-me"
    api_prefix: str = "/api/v1"
    cors_origins: tuple[str, ...] = ("http://localhost:4321", "http://127.0.0.1:4321")


def load_config() -> Config:
    debug = os.getenv("FLASK_DEBUG", "").lower() in ("1", "true", "yes")
    secret = os.getenv("SECRET_KEY", "dev-change-me")
    origins = os.getenv("CORS_ORIGINS", "http://localhost:4321,http://127.0.0.1:4321")
    return Config(
        debug=debug,
        secret_key=secret,
        cors_origins=tuple(o.strip() for o in origins.split(",") if o.strip()),
    )
