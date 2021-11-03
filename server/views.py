from flask import abort, render_template, request, url_for, copy_current_request_context, jsonify, send_from_directory
import os
from server import app
from flask_flatpages import FlatPages
app.config.from_pyfile('settings.py')

pages = FlatPages(app)


@app.route('/')
@app.route('/<path:path>/')
def index(*args, **kwargs):
    #return render_template('teaching_page.html', disc_info=nums)
    return render_template('index.html')

@app.route('/pages/<path:path>/')
def page(path):
    # 'path is the filename of a page, without the file extension'
    # e.g. "first-post"
    page = pages.get_or_404(path)

    return render_template('page.html', page=page)

@app.route('/load_discussion')
def load_discussion():
    init_data = []
    worksheets = []
    wksht_names = []
    solutions = []
    names = os.listdir(os.path.join(app.static_folder, 'cs61a/slides'))
    
    for file in slidesrc:
            if not file.startswith('.'):
                    slides.append(url_for('static', filename=os.path.join('cs61a/slides', file)))

    names = os.listdir(os.path.join(app.static_folder, 'cs61a/worksheets'))
    for file in names:
            if not file.startswith('.'):
                    worksheets.append(url_for('static', filename=os.path.join('cs61a/worksheets', file)))
                    wksht_names.append(file[:-4])

    names = os.listdir(os.path.join(app.static_folder, 'cs61a/solutions'))

    for file in names:
            if not file.startswith('.'):
                    solutions.append(url_for('static', filename=os.path.join('cs61a/solutions', file)))
                    solutions.append(file[:-4])
    for i, (title, slide, worksheet, name, solution) in enumerate(zip(titles[:len(slides)], sorted(slides), sorted(worksheets), sorted(wksht_names), sorted(solutions))):
            init_data.append({'num': i, 'title': title, 'slide': slide, 'worksheet': worksheet, 'wksht_name': name, 'solution': solution})
    return jsonify(init_data)

slidesrc = ['disc_00.pdf', 'disc_01.pdf', 'disc_02.pdf', 'disc_03.pdf', 'disc_04.pdf', 'disc_05.pdf', 'disc06.pdf', 'disc_07.pdf', 'disc_08.pdf', 'disc10.pdf']
titles=['Getting Started',
        'Control, Environment Diagrams',
        'Higher-Order Functions, Lambda Expressions',
        'Recursion',
        'Tree Recursion, Python Lists, Data Abstraction',
        'Trees, Data Abstraction, Sequences',
        'Mutability and Iterators',
        'Object-Oriented Programming, String Representation',
        'Linked Lists, Trees',
        'Scheme, Scheme Lists',
        'Interpreters',
        'Regular Expressions, BNF, SQL',
        'Final Review']
