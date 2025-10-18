import {defineStore} from "pinia";


interface TypeRecord {
    value: string
    table: string
}

interface Account {
    id: number
    tags: string[]
    recordType: string
    login: string
    password: string | null
}

interface AccountsState {
    typeRecords: TypeRecord[]
    accounts: Record<number, Account>
    nextId: number
}


export const useAccountsStore = defineStore("accounts",{
    state: (): AccountsState => ({
        typeRecords:[
            {
                value: "local",
                table: "Локальная"
            },
            {
                value: "LDAP",
                table: "Глобальная"
            }
        ] as TypeRecord[],
        accounts: {
            0:{
                id: 0,
                tags:["tag1", "tag2", "tag3"],
                recordType: "local",
                login: "login",
                password: "password"
            },
            1:{
                id: 1,
                tags:["tag1", "tag2", "tag3"],
                recordType: "local",
                login: "login2",
                password: "password"
            }
        },
        nextId: 2
    }),
    actions:{
        updateTags(accountId: number, newTags: string): void {
            const account = this.accounts[accountId];
            if (account) {
                account.tags = newTags.split("; ");
            }
        },
        updateLogin(accountId: number, newLogin: string): void {
            const account = this.accounts[accountId];
            if (account) {
                account.login = newLogin;
            }
        },
        updateRecordType(accountId: number, newRecordType: string): void {
            // if (!this.typeRecords.some(record => record.value === newRecordType)) {
            //     return;
            // }
            const account = this.accounts[accountId];
            if (account) {
                account.recordType = newRecordType;
                if (newRecordType=="LDAP"){
                    account.password = null
                }
                else if(!account.password){
                    account.password = ""
                }
            }
        },
        updatePassword(accountId: number, newPassword: string): void {
            const account = this.accounts[accountId];
            if (account) {
                account.password = newPassword;
            }
        },
        addAccount(): void {
            const newAccount: Account = {
                id: this.nextId,
                tags: [],
                recordType: "",
                login: "",
                password: ""
            };
            this.accounts[this.nextId] = newAccount;
            this.nextId++;
        },
        deleteAccount(accountId: number): void {
            delete this.accounts[accountId];
        }
    }
})