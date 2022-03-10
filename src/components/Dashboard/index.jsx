import React, { useState } from "react";
import { Heading, Input, Text } from "../../shared";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const [addExpense, showAddExpense] = useState(false);
  const [state, setState] = useState({
    totalBal: 0,
    youOwe: 0,
    owed: 0,
  });
  const [expenses, setExpenses] = useState([]);
  const expenseYouOwe = expenses.filter((item) => !item.paidByYou);
  const expensesYouAreOwed = expenses.filter((item) => item.paidByYou);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    debugger;
    const payload = {
      owed: data.paidByYou ? state.owed + Number(data.expense) / 2 : state.owed,
      youOwe: !data.paidByYou
        ? state.youOwe + Number(data.expense) / 2
        : state.youOwe,
    };
    setExpenses([...expenses, { ...data, expense: Number(data.expense) / 2 }]);
    setState({
      ...state,
      ...payload,
    });
    reset();
  };

  return (
    <div>
      <div className="container mx-auto bg-teal-400 h-16">
        <div className="flex justify-between">
          <Heading>Dashboard</Heading>
          <button onClick={() => showAddExpense(!addExpense)}>
            Add Expense
          </button>
        </div>
        <div className="flex justify-between">
          <Heading>total balance ${state.owed - state.youOwe}</Heading>
          <Heading>you owe ${state.youOwe}</Heading>
          <Heading>you are owed ${state.owed}</Heading>
        </div>

        {addExpense && (
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="name"
              register={register}
              required
              error={errors["name"]}
              inputProps={{
                placeholder: "Steve Jobs",
              }}
            />
            <label className="flex align-center">
              <input
                style={{ width: "50px" }}
                {...register("paidByYou", { required: false })}
                type="checkbox"
              />
              <span>Paid by Me</span>
            </label>

            <Input
              label="expense"
              register={register}
              required
              inputProps={{
                type: "number",
              }}
              pattern={{
                value: /^[0-9]+$/,
                message: "Please enter a number",
              }}
              error={errors["expense"]}
              inputProps={{
                placeholder: "expense",
              }}
            />

            <input type="submit" value="Save" />
          </form>
        )}
        <div className="flex justify-between">
          <div>
            <Heading>You Owe</Heading>
            {expenseYouOwe.map((item, index) => {
              return (
                <div key={index}>
                  You owe {item.name} ${item.expense}
                </div>
              );
            })}
          </div>
          <div>
            <Heading>You Are Owed</Heading>
            {expensesYouAreOwed.map((item, index) => {
              return (
                <div key={index}>
                  {item.name} owes you ${item.expense}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
