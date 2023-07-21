import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import Menu from 'components/Menu/Menu'

import useTitle from 'hooks/useTitle'

const Contact: React.FC = () => {
  const setTitle = useTitle()

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
            <div className="col col-md-6">
              <div className="pb-2">
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
            <div className="col col-md-6">
              <div className="pb-2">
                <span>Email</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="exemple@email.com"
                aria-label="email"
                aria-describedby="basic-addon1"
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
            />
          </div>
          <div className="pb-2">
            <span>Message</span>
          </div>
          <div className="form-floating pb-4">
            <textarea
              className="form-control p-5"
              placeholder="Message"
              id="coment"
            />
          </div>
        </form>
        <button type="button" className="btn btn-primary btn-lg">
          Submit
        </button>
      </Container>
    </>
  )
}

export default memo(Contact)
