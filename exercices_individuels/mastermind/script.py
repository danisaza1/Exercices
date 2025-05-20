def only_four_colors(propose):
    allowed_colors = ['blue', 'red', 'yellow', 'green', 'purple', 'orange', 'black', 'white']
    
    if len(propose) < 4:
        print (f'Please choose 4 colors from this list: {allowed_colors}')
        # el f-string hace f'texto : {la variable que quiero que aparesca}')
        return False
       
    for color in propose:
        if color not in allowed_colors:
            print (f'Choose a valid color from this list: {allowed_colors}')
            return False

    print('Colors accepted')
    return True
# para que pongo return true y false : es para mi un feedback de saber si se hizo bien o no la funcion

def codemaker():
    while True:
        secret = input("Codemaker: Enter the secret code (4 colors separated by commas): ")
        secret_color = [color.strip() for color in secret.split(",")]
        if only_four_colors(secret_color):
            print("Secret code accepted!")
            return secret_color
        else:
            print("Invalid secret code, try again.")


def good_combinaison(propose, secret_color):
    return propose == secret_color
# el hecho que ponga solo return hace que salga exactamente el orden del secrret code


def play_game (secret_color):
    tries = 0
    max_tries = 12
    
    while tries < max_tries:
        message = input("Write four another colors")
        propose = [color.strip() for color in message.split (",")]
# strip elimina blancos al principio y al final de cada palabra, split los divide con comas

        if not only_four_colors(propose):
            print("You have to select valid colors.")
            continue
        if good_combinaison(propose, secret_color):
            print("You guess the colors")
            break
        else:
            print("You have to continue")
            tries += 1

    if tries == max_tries:
        print(f"You lost! The secret code was: {secret_color}")


secret_code = codemaker()  # Jugador 1 pone el código secreto
play_game(['blue', 'red', 'green', 'green'])  # ✅ Esto sí es válido




   




#    --------------------------------

# from browser import document, alert, window
            # esta linea hace que pueda escribir python en html,
            # document : DOM, alert : como en JS alert('message')
            # linea expcifica a Brython y este ultimo transfoma python en JS
            # debo de poner lo que va a aparecer en html


# document["output"].text = 'Choose a valid color from this list: {allowed_colors}'
                # aqui no se pone text('hola') porque sino seria que text es una funcion, entonces
                # se pone como esta aqui
   
#  def set_secret(event=None):
         # evento=none un evento estoy ejecutando eventos desde html que pasan un argumento osea un event, 
         # none hace que el event no sea obligatorio   
   

# tries = 0
# max_tries = 12   
    # se debe de poner fuera de la funcion para que se converse entre clics

# def verificar_click(event):
#     global tries
# global se usa dentro de una funcion para decirle a python que voy a usar y modificar una 
# variable que esta fuera de la funcion. 

#    elif tries >= max_tries:
# elif es una abreviación de "else if" 


# document["secret-box"].bind("keypress", lambda e: set_secret(e) if e.keyCode == 13 else None)
# document["input-box"].bind("keypress", lambda e: verificar(e) if e.keyCode == 13 else None)
    # .bind escucha cuando el usuario le da click, lambda e es una funcion flechee aqui hace que funcione e.keycode 
    # e.keycode es si lo doy enter, 13 es el codigo de la tecl enter
    # sino pongo todo esto, el usuario le podria dar enter con cualquier tecla y seria problematico


# window.set_secret = set_secret
# window.verificar = verificar
    #esto permite que las llame desde html como button onclick: set secret y verificar
    # sin esto bryton no sabria que es set secret desde html    