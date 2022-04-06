from server import app
from flask_script import Manager
import os
from datetime import datetime
manager = Manager(app)

pagesdir = os.path.join('server', 'static', 'pages')
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
