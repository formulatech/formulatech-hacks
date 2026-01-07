from dataclasses import dataclass


@dataclass(slots=True)
class User:
    id: str
    email: str
    name: str

    def to_dict(self) -> dict[str, str]:
        return {"id": self.id, "email": self.email, "name": self.name}
