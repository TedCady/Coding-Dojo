package com.example.demo;

public class BankAccountTest extends BankAccount {
	
	public static void main(String[] args) {
		BankAccount acct1 = new BankAccount();
		System.out.println(acct1.accountNumber);
		BankAccount acct2 = new BankAccount();
		System.out.println(acct2.accountNumber);
		acct1.deposit(1738, "checking");
		acct2.withdraw(100000, "savings");
		acct1.checkChecking();
		acct2.checkSavings();
	}
}
