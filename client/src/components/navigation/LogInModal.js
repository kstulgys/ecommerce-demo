import React from 'react'
import Component from '@reactions/component'
import {
  Button,
  Pane,
  Text,
  Heading,
  TextInput,
  Icon,
  Dialog,
} from 'evergreen-ui'
import { Mutation, Query } from 'react-apollo'
import { gql } from 'apollo-boost'
// import { ME_QUERY } from '../../../../graphql/queries'

const LogInModal = ({ children }) => (
  <Component
    initialState={{
      isShown: false,
      isLoading: false,
      email: '',
      message: null,
    }}
  >
    {({ state, setState }) => (
      <Pane>
        <Dialog
          isShown={state.isShown}
          onCloseComplete={() =>
            setState({
              isShown: false,
              isLoading: false,
              email: '',
              message: '',
            })
          }
          isConfirmLoading={state.isLoading}
          hasFooter={false}
          hasHeader={false}
        >
          <div className="flex flex-column items-center">
            <Heading size={600} margin={24}>
              Your email please
            </Heading>
            <TextInput
              onChange={e => setState({ email: e.target.value })}
              name="email"
              placeholder="email"
            />
            <Mutation
              mutation={SEND_TOKEN}
              variables={{ email: state.email }}
              onCompleted={() =>
                setState({
                  isLoading: false,
                  message: 'Please check your Inbox!',
                  success: true,
                })
              }
            >
              {(mutation, { loading, error }) =>
                !state.success ? (
                  <Button
                    height={40}
                    className="br-pill mt4 mb3"
                    isLoading={state.isLoading}
                    onClick={async () => {
                      try {
                        setState({ isLoading: true })
                        await mutation()
                      } catch (e) {
                        console.log(error)
                      }
                    }}
                  >
                    Submit
                  </Button>
                ) : (
                  <div className="flex items-center justify-center mt4 mb3">
                    <Text paddingRight={16}>
                      {state.message && state.message}
                    </Text>
                    <Icon icon="envelope" color="info" size={40} />
                  </div>
                )
              }
            </Mutation>
          </div>
        </Dialog>
        {children({
          setState,
        })}
      </Pane>
    )}
  </Component>
)

export default LogInModal

const SEND_TOKEN = gql`
  mutation sendShortLivedToken($email: String!) {
    sendShortLivedToken(email: $email) {
      message
    }
  }
`
