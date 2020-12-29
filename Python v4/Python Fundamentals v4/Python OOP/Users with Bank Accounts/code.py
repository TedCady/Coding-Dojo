# Classes
class user:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate = 0.003, balance = 0.00)

    def make_deposit(self, dPosit):
        self.account.deposit(dPosit)
        balance = self.account.balance
        print(f'{self.name} deposited ${dPosit}.  Account balance: ${balance}.')
        return self

    def make_withdrawal(self, wDraw):
        balance = self.account.balance
        if balance < wDraw:
            print('Insufficient Balance')
            return self
        else:
            self.account.withdraw(wDraw)
            balance = self.account.balance
            print(f'{self.name} withdrew ${wDraw}.  Remaining balance: ${balance}.')
            return self

    def display_user_balance(self):
        if self.account.balance == 0:
            balance = 0
        else:
            balance = self.account.balance
        print(f'{self.name} | Account balance: ${balance}.')
        return self

    def transfer_money(self, amount, transfer_to):
        balance = self.account.balance
        if balance < amount:
            return(f'Insufficient Balance (${amount} > ${balance})')
        else:
            self.account.balance -= amount
            balance = self.account.balance
            transfer_to.account.balance += amount
            tBalance = transfer_to.account.balance
        print(f"{self.name} transferred ${amount} to {transfer_to.name}.\n{self.name}'s remaining balance after transfer: ${balance};\n{transfer_to.name}'s new balance after transfer: ${tBalance}.")
        return self

class BankAccount:
    def __init__(self, int_rate, balance):
        self.apy = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if amount > self.balance:
            print('Insufficient Balance')
            return self
        else:
            self.balance -= amount
            return self
    def display_account_info(self):
        sBalance = self.balance
        apy = self.yield_interest(sBalance, self.apy)
        print(sBalance)
        print(apy)
        return self
    def yield_interest(self, bal, apy):
        r = bal + (apy * bal)
        return(r)
# # # # # # # # # # # # # 

user_list = [
    
    ]
for i,ii in user_list:
    print(i)
    print(ii)

# def new_user():
#     name =  input('Name: ').strip()
#     email = input('Email: ').strip()
#     if name == '' or email == '':
#         return('Name and Email must be provided.')
#     else:
#         newUser = user(name, email)
#         newUser.account.display_account_info()