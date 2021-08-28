import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51JTMjGSGGbzAGpOHGWLYTpK2cbth0XMk3BROSM49s3IEEmZM8mtHspjrlkwtAXFasT8aljkQ3xpcgBfalxHCJrrX00GyWWR1lE"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
