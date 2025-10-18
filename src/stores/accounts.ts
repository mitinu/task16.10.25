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


export const useAccountsStore = defineStore("accounts",{
    state: () => ({
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
        accounts:[
            {
                id: 0,
                tags:["tag1", "tag2", "tag3"],
                recordType: "local",
                login: "login",
                password: "password"
            },
            {
                id: 1,
                tags:["tag1", "tag2", "tag3"],
                recordType: "local",
                login: "login2",
                password: "password"
            }
        ] as Account[],
        nextId: 2
    }),
    actions:{
        updateTags(accountId: number, newTags: string): void {
            const account = this.accounts.find(acc => acc.id === accountId);
            if (account) {
                account.tags = newTags.split("; ");
            }
        },
        updateLogin(accountId: number, newLogin: string): void {
            const account = this.accounts.find(acc => acc.id === accountId);
            if (account) {
                account.login = newLogin;
            }
        },
        updateRecordType(accountId: number, newRecordType: string): void {
            // if (!this.typeRecords.some(record => record.value === newRecordType)) {
            //     return;
            // }
            const account = this.accounts.find(acc => acc.id === accountId);
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
            const account = this.accounts.find(acc => acc.id === accountId);
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
            this.accounts.push(newAccount);
            this.nextId++;
        },
        deleteAccount(accountId: number): void {
            const index = this.accounts.findIndex(acc => acc.id === accountId);
            if (index !== -1) {
                this.accounts.splice(index, 1);
            }
        }
    }
})