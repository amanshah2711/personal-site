
import logging

logging.basicConfig(level=logging.INFO)


# Flask-related stuff
from flask import Flask, request

from server import assets

# Initialize the application
app = Flask(__name__, static_url_path='/server/static')
#app.config.from_object('config')

app.jinja_env.globals.update({
  'assets_env': assets.assets_env,
})


import server.views
