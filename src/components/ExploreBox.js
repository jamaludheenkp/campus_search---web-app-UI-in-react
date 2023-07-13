import React from 'react'
import './ExploreBox.css'
import { Container , FormSelect,Form, Button} from 'react-bootstrap'




function ExploreBox() {
  return (
    <>
       <section className='explore'>
            <Container fluid>
            <div className="row">
                <div className='col-md-8'>
                  <div className='exp'>
                    <h2>
                    Explore <span className='text-warning'> 5000+ </span> Courses <br />
                    and <span className='text-warning'> 500+ </span> Universities
                    </h2>
                    <p>
                    With Campus Search, you can find a study abroad <br/> course that fits your interests and goals
                    </p>
                    <div className="row exp_lab">
                      <div className='col-md-6'>
                          <label for="" className='exp_label text-warning fs-5 p-2 pt-4 d-inline-block'> Are you looking for</label>
                          <Form.Select className='exploreSelect rounded-4' id='course_level' name='course_level' aria-label='Default' size='lg'>
                            <option value="0"> Select Your Degree </option>
                            <option value="1"> Bachelors </option>
                            <option value="2"> Masters </option>
                            <option value="3"> Phd </option>
                            <option value="4"> Premaster </option>
                            <option value="5"> UG Diploma </option>
                            <option value="6"> PG Diploma </option>
                          </Form.Select>
                      </div>
                      <div className='col-md-6'>
                          <label for="" className=' exp_label text-warning fs-5 p-2 pt-4 d-inline-block'> From </label>
                          <FormSelect className='exploreSelect rounded-4' id='state' name="state" aria-label='Default' size='lg'>
                            <option value="7"> Select State </option>
                            <option value="8"> Kerala </option>
                            <option value="9"> Tamil Nadu </option>
                            <option value="10"> Karnataka </option>
                            <option value="11"> Telangana </option>
                            <option value="12"> Maharashtra  </option>
                            <option value="13"> Delhi  </option>
                            <option value="14"> Madhya Predhesh  </option>
                          </FormSelect>
                      </div>
                      <div className='col-md-12'>
                          <label for="" className='exp_label text-warning fs-5 pt-4 p-2 d-inline-block'> Specialized in </label>
                          <FormSelect className='exploreSelect rounded-4' aria-label='Default' size='lg'>
                            <option value="24"> Select Stream </option>
                            <option value="15"> Information Technology </option>
                            <option value="16"> Engineering </option>
                            <option value="17"> Business Management </option>
                            <option value="18"> Banking and Finance  </option>
                            <option value="19"> Law </option>
                            <option value="20"> Health Care </option>
                            <option value="21"> Arts & Literature </option>
                            <option value="22"> Journalism </option>
                            <option value="23"> Sports & Nutrition </option>
                          </FormSelect>
                      </div>
                      <div class="col-md-12">
                        <Button className="btn btn-warning px-4 p-2 fs-4 my-5 rounded-5 search_btn">Find Course</Button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </Container>
        </section>
    </>
  )
}

export default ExploreBox