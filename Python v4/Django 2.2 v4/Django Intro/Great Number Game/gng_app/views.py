from django.shortcuts import render, redirect
import random

def index(request):
    if 'rand' in request.session:
        pass
    else:
        request.session['rand'] = random.randint(1,100)
        request.session['result_color'] = 'white'
    return render(request, 'index.html')

def guessNbr(request):
    if request.session['result'] == 'meow':
        request.session['button'] = 'Submit'
        request.session['result'] = ''
        del request.session['rand']
        return redirect('/')
    else:
        if request.GET['input_guess'] == '':
            result = 'dafuq mrowr'
            button = 'Try again'
        else:
            iGuess = int(request.GET['input_guess'])
            iRand = int(request.session['rand'])
            if iRand > iGuess:
                request.session['result_color'] = 'red'
                result = 'hiss low' 
                button = 'Try again'
            elif iRand < iGuess:
                request.session['result_color'] = 'red'
                result = 'hiss high'
                button = 'Try again'
            else:
                request.session['result_color'] = 'green'
                result = 'I love my pretty girl'
                button = 'Play Again'
    request.session['button'] = button
    request.session['result'] = result   
    return redirect('/')