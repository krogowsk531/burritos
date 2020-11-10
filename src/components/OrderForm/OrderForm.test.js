import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import OrderForm from './OrderForm'

describe('OrderForm', () => {
  it('should have one input field and ingredient buttons and a submit button', () => {
    render (<OrderForm />)

    const nameField = screen.getByPlaceHolderText('Name')
    const ing1 = screen.getByText('Date:')
    const ing2 = screen.getByText('Time:')
    const ing3 = screen.getByText('Number of Guests:')
    const ing4 = screen.getByText('Number of Guests:')
    const ing5 = screen.getByText('Number of Guests:')
    const ing6 = screen.getByText('Number of Guests:')
    const ing7 = screen.getByText('Number of Guests:')
    const ing8 = screen.getByText('Number of Guests:')
    const ing9 = screen.getByText('Number of Guests:')
    const ing10 = screen.getByText('Number of Guests:')
    const ing11 = screen.getByText('Number of Guests:')
    const ing12 = screen.getByText('Number of Guests:')
    const submitBtn = screen.getByText()



    expect(nameField).toBeInTheDocument();
    expect(dateField).toBeInTheDocument();
    expect(timeField).toBeInTheDocument();
    expect(numberField).toBeInTheDocument();

  })
})
