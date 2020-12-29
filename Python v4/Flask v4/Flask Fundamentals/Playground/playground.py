from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html', repeat_int = 3, color_var = 'blue')

@app.route('/play/<x>')
def play_x(x):
    return render_template('index.html', repeat_int = int(x), color_var = 'blue')

@app.route('/play/<x>/<bg_color>')
def play_x_color(x, bg_color):
    return render_template('index.html', repeat_int = int(x), color_var = bg_color)

if __name__ == '__main__':
    app.run(debug=True)