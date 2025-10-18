<template>
  <div class="listAccount">
    <div class="listAccount__header">
      <h3>учетные записи</h3>
      <addButton
        @click.stop="addAccount"
      />
    </div>
    <div class="listAccount__hint">
      <div class="listAccount__hint__circle">&#63;</div>
      <span>Для указания нескольких методов для одной пары логин/пароль, используйте разделитель "; "</span>
    </div>
    <div class="listAccount__list">
      <div class="listAccount__list__head">
        <div class="listAccount__list__head__item"><span>Метки</span></div>
        <div class="listAccount__list__head__item"><span>Тип записи</span></div>
        <div class="listAccount__list__head__item"><span>Логин</span></div>
        <div class="listAccount__list__head__item"><span>Пароль</span></div>
        <div class="listAccount__list__wastebasket"></div>
      </div>
      <div class="listAccount__list__content">
        <datalist id="recordType">
          <option
              v-for="(typeRecord, idx) in accountsStore.typeRecords"
              :key="idx"
              :value="typeRecord.value"
              :label="typeRecord.table"
          />
        </datalist>
        <ListItem
          class="listAccount__list__content__recording"
          v-for="account in accountsStore.accounts"
          :key="account.id"
          :account="account"
          :store="accountsStore"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ListItem from "./components/ListItem.vue";
import {useAccountsStore} from "@/stores/accounts";
import { mapState, mapActions } from "pinia";
import AddButton from "@/components/UI/AddButton.vue";

export default {
  name: 'ListAccount',
  components:{
    ListItem,
    AddButton
  },
  setup() {
    const accountsStore = useAccountsStore()
    return {accountsStore}
  },
  methods:{
    ...mapActions(useAccountsStore, ['addAccount']),
  }
}
</script>

<style scoped lang="scss">
.listAccount {
  padding: 16px;

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    &__addButton {
      width: 32px;
      height: 32px;
      margin-left: 20px;
      background-color: white;
      border: black solid 1px;
      border-radius: 4px;
      font-size: 18px;
      cursor: pointer;
    }
  }

  &__hint{
    background-color: lightsteelblue;
    border-radius: 4px;
    padding: 10px;
    &__circle{
      display: inline-block;
      border-radius: 50%;
      border: black solid 1px;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-weight: bold;
    }
    span{
      margin-left: 10px;
    }
  }

  &__list {
    margin-top: 20px;

    &__head {
      width: 100%;
      height: 40px;
      display: flex;
      &__item {
        width: 24%;
        padding-left: 2%;
      }
    }

    &__content__recording {
      width: 100%;
      display: flex;
    }
    &__wastebasket{
      width: 35px;
      padding: 5px;
    }
  }
}
</style>