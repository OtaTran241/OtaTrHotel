from pathlib import Path

from starlette.applications import Starlette
from starlette.responses import FileResponse
from starlette.routing import Mount, Route
from starlette.staticfiles import StaticFiles


BASE_DIR = Path(__file__).resolve().parent


async def homepage(_request):
    return FileResponse(BASE_DIR / "index.html")


async def asset_or_index(request):
    requested = (BASE_DIR / request.path_params["path"]).resolve()

    if BASE_DIR in requested.parents and requested.is_file():
        return FileResponse(requested)

    return FileResponse(BASE_DIR / "index.html")


app = Starlette(
    routes=[
        Route("/", homepage),
        Mount("/images", StaticFiles(directory=BASE_DIR / "images"), name="images"),
        Mount("/noi_dung", StaticFiles(directory=BASE_DIR / "noi_dung"), name="noi_dung"),
        Route("/{path:path}", asset_or_index),
    ],
)
