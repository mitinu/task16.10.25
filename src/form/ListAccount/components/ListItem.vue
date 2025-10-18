<template>
  <div>
    <div class="listAccount__list__content__recording__item">
      <tagsInput
          :value="account.tags.join('; ')"
          @changeValue="changeTags"
      />
    </div>
    <div class="listAccount__list__content__recording__item">
      <recordTypeInput
          :value="account.recordType"
          @changeValue="changeRecordType"
      />
    </div>
    <div :class="{'listAccount__list__content__recording__item': !recordTypeLDAP,'listAccount__list__content__recording__item_rowspan2': recordTypeLDAP,}">
      <loginInput
          :value="account.login"
          @changeValue="changeLogin"
      />
    </div>
    <div :class="{'listAccount__list__content__recording__item': !recordTypeLDAP, 'displayNone': recordTypeLDAP,}">
      <passwordInput
          :value="account.password"
          @changeValue="changePassword"
      />
    </div>
    <div class="listAccount__list__wastebasket">
      <buttonDelete
        @click.stop="deleteAccount(account.id)"
      />
    </div>
  </div>
  </template>

<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import { useAccountsStore } from "@/stores/accounts";
import { mapState, mapActions } from "pinia";
import LoginInput from "@/components/UI/LoginInput.vue";
import RecordTypeInput from "@/components/UI/RecordTypeInput.vue";
import TagsInput from "@/components/UI/TagsInput.vue";
import PasswordInput from "@/components/UI/PasswordInput.vue";
import ButtonDelete from "@/components/UI/ButtonDelete.vue";

interface Account {
  id: number
  tags: string[]
  recordType: string
  login: string
  password: string | null
}

export default defineComponent({
  name: 'ListItem',
  components:{
    LoginInput,
    RecordTypeInput,
    TagsInput,
    PasswordInput,
    ButtonDelete
  },
  props:{
    account: {
      type: Object as PropType<Account>,
      required: true,
    }
  },
  computed:{
    recordTypeLDAP(): boolean{
      return this.account.recordType == "LDAP";
    }
  },
  methods:{
    ...mapActions(useAccountsStore, ['updateTags']),
    changeTags(newTags: string): void{
      this.updateTags(this.account.id, newTags);
    },

    ...mapActions(useAccountsStore, ['updateLogin']),
    changeLogin(newLogin: string): void{
      this.updateLogin(this.account.id, newLogin);
    },

    ...mapActions(useAccountsStore, ['updateRecordType']),
    changeRecordType(newRecordType: string): void{
      this.updateRecordType(this.account.id, newRecordType);
    },

    ...mapActions(useAccountsStore, ['updatePassword']),
    changePassword(newPassword: string): void{
      this.updatePassword(this.account.id, newPassword);
    },

    ...mapActions(useAccountsStore, ['deleteAccount'])
  }
})
</script>

<style scoped lang="scss">
.displayNone{
  display: none;
}
.listAccount__list__wastebasket{
  width: 35px;
  padding: 5px;
  align-content: center;
}
.listAccount__list__content__recording{
  &__item{
    width: 24%;
    padding-right: 5%;
    &_rowspan2{
      width: 54%;
      padding-right: 5%;
    }
  }
}
</style>