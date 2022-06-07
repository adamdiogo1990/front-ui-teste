import logo from './logo.svg';
import './App.css';
import { Icon } from 'react-icons-kit'
import { money } from 'react-icons-kit/fa/money'
import { userO } from 'react-icons-kit/fa/userO'
import { folder } from 'react-icons-kit/fa/folder'

function App() {
  return (
    <div className='content-details'>
      <div className='header-h1-details'>
        <h1 className='h1-details'>Detalhes do Trade - ID do Trade</h1>
        <div className='container-button-actions'>
          <input class="dark-light" type="checkbox" id="dark-light" name="dark-light" />
          <div class="sec-center">
            <input class="dropdown" type="checkbox" id="dropdown" name="dropdown" />
            <label class="for-dropdown" for="dropdown">Ações</label>
            <div class="section-dropdown">
              <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
              <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
              <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>



      <div className='header-details'>
        <div className='box-info-details'>
          <div className='right-details'>
            <div className='title-info-details'>
              <span className='date-create-details'>Data de Criação</span>
            </div>
            <div className='data-info-details'>
              06/06/2022 18:05
            </div>
          </div>
        </div>
        <div className='box-info-details'>
          <div className='right-details'>
            <div className='title-info-details'>
              <span className='date-create-details'>Segmento</span>
            </div>
            <div className='data-info-details'>
              ----
            </div>
          </div>
        </div>
        <div className='box-info-details'>
          <div className='right-details'>
            <div className='title-info-details'>
              <span className='date-create-details'>C/C</span>
            </div>
            <div className='data-info-details'>
              ----
            </div>
          </div>
        </div>
        <div className='box-info-details'>
          <div className='right-details'>
            <div className='title-info-details'>
              <span className='date-create-details'>Cliente</span>
            </div>
            <div className='data-info-details'>
              ----
            </div>
          </div>
        </div>
        <div className='box-info-details'>
          <div className='right-details'>
            <div className='title-info-details'>
              <span className='date-create-details'>Pagador / Recebedor</span>
            </div>
            <div className='data-info-details'>
              ----
            </div>
          </div>
        </div>
        <div className='box-info-details'>
          <div className='right-details'>
            <div className='title-info-details'>
              <span className='date-create-details'>Classificação</span>
            </div>
            <div className='data-info-details'>
              ----
            </div>
          </div>
        </div>
      </div>
      <div className='geral-info-details'>
        <div className='left-details'>
          <Icon size={14} icon={money} />
        </div>
        <div className='right-details'>
          <div className='geral-content-box'>
            <div className='title-geral-box'> Natureza da Operação </div>
            <div className='content-geral-box'>
              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Natureza de Fato</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Aval</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Grupo</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Código do Cliente</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Código do Beneficiário</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Vinculo</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>
            </div>

            <div className='content-geral-box'>
              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='taxes-create-details'>Tributos</span>
                  </div>
                  <div className='data-info-details'>
                    <span className='taxes-text'>Recolhimento N/A</span>
                    <div className='taxes-container'>
                      <div className='taxes-box'>
                        <div className='taxes-label'>
                          IRRF
                        </div>
                        <div className='info-taxes-label'>
                          0,0000%
                        </div>
                      </div>
                      <div className='taxes-box'>
                        <div className='taxes-label'>
                          IOF
                        </div>
                        <div className='info-taxes-label'>
                          0,0000%
                        </div>
                      </div>
                      <div className='taxes-box'>
                        <div className='taxes-label'>
                          ISS
                        </div>
                        <div className='info-taxes-label'>
                          0,0000%
                        </div>
                      </div>
                      <div className='taxes-box'>
                        <div className='taxes-label'>
                          CIDE
                        </div>
                        <div className='info-taxes-label'>
                          0,0000%
                        </div>
                      </div>
                      <div className='taxes-box'>
                        <div className='taxes-label'>
                          PIS
                        </div>
                        <div className='info-taxes-label'>
                          0,0000%
                        </div>
                      </div>
                      <div className='taxes-box'>
                        <div className='taxes-label'>
                          COFINS
                        </div>
                        <div className='info-taxes-label'>
                          0,0000%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='geral-info-details'>
        <div className='left-details'>
          <Icon size={14} icon={userO} />
        </div>
        <div className='right-details'>
          <div className='geral-content-box'>
            <div className='title-geral-box'> Cliente </div>
            <div className='content-geral-box'>
              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Nome</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Conta Bancaria</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>CPF</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Banco</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Classificação</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='geral-info-details'>
        <div className='left-details'>
          <Icon size={14} icon={userO} />
        </div>
        <div className='right-details'>
          <div className='geral-content-box'>
            <div className='title-geral-box'> Pagador/Recebedor </div>
            <div className='content-geral-box'>
              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Beneficiário</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Conta Bancaria</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>CPF</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Banco</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Classificação</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='geral-info-details'>
        <div className='left-details'>
          <Icon size={14} icon={folder} />
        </div>
        <div className='right-details'>
          <div className='geral-content-box'>
            <div className='title-geral-box'> RDE </div>
            <div className='content-geral-box'>
              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Número</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Tipo Liquidaçã0</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Evento</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Data do Evento</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>

              <div className='box-info-details'>
                <div className='right-details'>
                  <div className='title-info-details'>
                    <span className='date-create-details'>Valor</span>
                  </div>
                  <div className='data-info-details'>
                    ----
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
