from dataclasses import dataclass


@dataclass(slots=True)
class Team:
    id: str
    name: str
    member_count: int

    def to_dict(self) -> dict[str, str | int]:
        return {"id": self.id, "name": self.name, "member_count": self.member_count}
