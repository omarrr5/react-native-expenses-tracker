import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of headphones',
        amount: 89.99,
        date: new Date('2021-12-30')
    },
    {
        id: 'e3',
        description: 'A Trousser',
        amount: 56.99,
        date: new Date('2021-12-18')
    },
    {
        id: 'e4',
        description: 'Laptop',
        amount: 999.99,
        date: new Date('2021-12-25')
    },
    {
        id: 'e5',
        description: 'A Trousser',
        amount: 56.99,
        date: new Date('2021-12-18')
    }

]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList  expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
})