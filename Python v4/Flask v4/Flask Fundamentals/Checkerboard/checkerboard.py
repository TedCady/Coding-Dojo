from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def main_page():
    return render_template('index.html', x=8, y=8, bg_color_1='gray', bg_color_2='black')

@app.route('/<x>')
def x_page(x):
    return render_template('index.html', x=int(x), y=8, bg_color_1='gray', bg_color_2='black')

@app.route('/<x>/<y>')
def xy_page(x, y):
    return render_template('index.html', x=int(x), y=int(y), bg_color_1='gray', bg_color_2='black')

@app.route('/<x>/<y>/<c1>/<c2>')
def xy_colors_page(x, y, c1, c2):
    return render_template('index.html', x=int(x), y=int(y), bg_color_1=c1, bg_color_2=c2)

if __name__ == '__main__':
    app.run(debug=True)