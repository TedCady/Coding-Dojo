class BankAccount:
    def __init__(self, int_rate, balance):
        self.apy = int_rate
        self.acctBal = balance

    def deposit(self, amount):
        self.acctBal += amount
        return self

    def withdraw(self, amount):
        if amount > self.acctBal:
            print('Insufficient Balance')
            return self
        else:
            self.acctBal -= amount
            return self
    def display_account_info(self):
        sBalance = self.acctBal
        apy = self.yield_interest(sBalance, self.apy)
        print(sBalance)
        print(apy)
        return self
    def yield_interest(self, bal, apy):
        r = bal + (apy * bal)
        return(r)

account1 = BankAccount(0.003, 1738)
account2 = BankAccount(0.003, 1739)

account1.deposit(1738).deposit(1738).deposit(1738).withdraw(979).display_account_info()
account2.deposit(9738).deposit(2738).withdraw(979).withdraw(979).withdraw(979).withdraw(979).display_account_info()