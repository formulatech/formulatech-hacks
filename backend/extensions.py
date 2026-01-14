from flask import Flask

from backend.store.database import Store

store: Store | None = None


def init_extensions(app: Flask) -> None:
    global store
    store = Store()
    app.extensions["store"] = store
