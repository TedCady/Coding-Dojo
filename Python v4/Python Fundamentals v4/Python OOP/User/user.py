# Assignment: User
    # Objectives:
    # Practice creating a class and making instances from it
    # Practice accessing the methods and attributes of different instances
    # If you've been following along, you're going to utilize the User class we've been discussing for this assignment.
        # For this assignment, we'll add some functionality to the User class:
            # make_withdrawal(self, amount) - have this method decrease the user's balance by the amount specified
            # display_user_balance(self) - have this method print the user's name and account balance to the terminal
                # eg. "User: Guido van Rossum, Balance: $150
            # BONUS: transfer_money(self, other_user, amount) - have this method decrease the user's balance by the amount and add that amount to other other_user's balance
                    #  Create a file with the User class, including the __init__ and make_deposit methods x
                    #  Add a make_withdrawal method to the User class x
                    #  Add a display_user_balance method to the User class x
                    #  Create 3 instances of the User class 
                    #  Have the first user make 3 deposits and 1 withdrawal and then display their balance
                    #  Have the second user make 2 deposits and 2 withdrawals and then display their balance
                    #  Have the third user make 1 deposits and 3 withdrawals and then display their balance
                    #  BONUS: Add a transfer_money method; have the first user transfer money to the third user and then print both users' balances
class user:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, dPosit):
        self.account_balance += dPosit
        balance = self.account_balance
        print(f'{self.name} deposited ${dPosit}.  Account balance: ${balance}.')
        return self

    def make_withdrawal(self, wDraw):
        balance = self.account_balance
        if balance < wDraw:
            print(f'Insufficient Balance (${wDraw} > ${balance})')
            return self
        else:
            self.account_balance -= wDraw
            balance = self.account_balance
            print(f'{self.name} withdrew ${wDraw}.  Remaining balance: ${balance}.')
            return self

    def display_user_balance(self):
        if self.account_balance == 0:
            balance = 0
        else:
            balance = self.account_balance
        print(f'{self.name} | Account balance: ${balance}.')
        return self

    def transfer_money(self, amount, transfer_to):
        balance = self.account_balance
        if balance < amount:
            return(f'Insufficient Balance (${amount} > ${balance})')
        else:
            self.account_balance -= amount
            balance = self.account_balance
            transfer_to.account_balance += amount
            tBalance = transfer_to.account_balance
        print(f"{self.name} transferred ${amount} to {transfer_to.name}.\n{self.name}'s remaining balance after transfer: ${balance};\n{transfer_to.name}'s new balance after transfer: ${tBalance}.")
        return self

# Create user
guido = user('Guido van Rossum', 'g@vr.python')
ethan = user('Ethan D. Mace', 'ethanmace@protonmail.com')
bob = user('Bob', 'bob@bob.bob')

guido.make_deposit(1986).make_deposit(1986).make_deposit(1986).make_withdrawal(12)
ethan.make_deposit(1990).make_deposit(1990).make_deposit(1990).make_withdrawal(14).make_withdrawal(14)
bob.make_deposit(808).make_withdrawal(13).make_withdrawal(13).make_withdrawal(13)
guido.transfer_money(1000,bob)