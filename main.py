from server import app
from flask_script import Manager
from flask_frozen import Freezer
import os
from datetime import datetime
manager = Manager(app)
freezer = Freezer(app)
@manager.command
def freeze(debug=False):
    if debug:
        freezer.run(debug=True)
    freezer.freeze()

@manager.command
def new_post(title):
    """
    creates a new file in 'pages' directory with
    indicated title, formatted yaml header, and opens
    new file in sublime text editor
    """

    yaml_header = 'title: %s' % title + '\n' +\
                  'date: %s' % str(datetime.now())[:10] + '\n\n'

    filename = title.replace(' ','_') + '.md'
    filepath = os.path.join(pagesdir, filename)
    with open(filepath, 'w') as thefile:
        thefile.write(yaml_header)



if __name__ == '__main__':
    manager.run()
