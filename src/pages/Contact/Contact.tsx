import { memo, useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'

import Menu from 'components/Menu/Menu'

import useTitle from 'hooks/useTitle'

const Contact: React.FC = () => {
  const setTitle = useTitle()
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    setTitle('Contact')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Menu />
      <Container>
        <h1 className="pt-5 pb-4">Contact</h1>
        <form>
          <div className="row pb-4">
            <div className="col col-md-6 col-12">
              <div className="pb-2 pt-2">
                <span>Name</span>
              </div>
              <input
                id="inputname"
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col col-md-6 col-12">
              <div className="pb-2 pt-2">
                <span>Email</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="exemple@email.com"
                aria-label="email"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col col-md-12 pb-4">
            <div className="pb-2">
              <span>Subject</span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              aria-describedby="basic-addon1"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="pb-2">
            <span>Message</span>
          </div>
          <div className="pb-4">
            <textarea
              onChange={(e) => setBody(e.target.value)}
              className="form-control "
              placeholder="Message"
              id="coment"
            />
          </div>
        </form>
        <a
          role="button"
          href={`mailto:${email}?subject=${subject}&body=${body}`}
          className={`btn btn-primary btn-lg ${email ? '' : 'disabled'}`}
          aria-disabled={!email}
          onClick={(e) => (email ? null : e.preventDefault())}
        >
          Submit
        </a>
      </Container>
    </>
  )
}

export default memo(Contact)
