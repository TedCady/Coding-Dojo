package com.example.demo;
import java.util.Random;

public class BankAccount {
	String accountNumber;
	double checkingBalance;
	double savingsBalance;
	static int accountsCreated = 0;
	static double totalBalance;
	private String accountGenerator() {
		String acctNum = "";
		for(int i = 0; i < 10; i++) {
			int randy = new Random().nextInt(9);
			acctNum += randy;
		}
		accountsCreated++;
		return acctNum;
	}
	public BankAccount() {
		accountNumber = accountGenerator();
		checkingBalance = 0;
		savingsBalance = 0;
	}
	public void checkChecking() {
		System.out.println("Checking balance: " + this.checkingBalance);
	}
	public void checkSavings() {
		System.out.println("Savings balance: " + this.checkingBalance);
	}	
	public void deposit(double amount, String account) {
		if(account == "checking") {
			this.checkingBalance += amount;
		} else {
			this.savingsBalance += amount;
		}
		totalBalance += amount;
		System.out.println(amount + " deposited to account # " + this.accountNumber);
	}
	public void withdraw(double amount, String account) {
		if(account == "checking") {
			if(this.checkingBalance < amount) {
				System.out.println("Insufficient funds.");
			} else {
				this.checkingBalance -= amount;
			} 
		} else {
			if(this.savingsBalance < amount) {
				System.out.println("Insufficient funds.");
			} else {
				this.savingsBalance -= amount;
			}
		}
		totalBalance -= amount;
	}
	public void userTotal() {
		double total = this.checkingBalance + this.savingsBalance;
		System.out.println("Total account balance: " + total);
	}
	public void allTotal() {
		System.out.println("All account balance: " + totalBalance);
	}
}
