import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import { selectTab, showTabs } from '../../common/tab/tabActions'
import {FORM_ID as BILLING_CYCLE_FORM_ID} from './BillingCycleForm'
import consts from '../../consts'

const BASE_URL = consts.API_URL
const INITIAL_VALUES = {credits:[{}], debts:[{}]}

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
   return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch =>{
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp =>{
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach( error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle){
    return[
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('BillingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle){
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('BillingCycleForm', billingCycle)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize(BILLING_CYCLE_FORM_ID, INITIAL_VALUES)
    ]
}