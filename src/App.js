import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addItemToList, removeItemFromList} from './redux/actions'

function App() {
  const dispatch = useDispatch()
  const tasks = useSelector(({tasks}) => tasks)

  React.useEffect(() => {
    localStorage.setItem('tasks', [...tasks].toString())
    console.log(localStorage.tasks)
  }, [tasks])

  const getInputValue = () => {
    const input = document.getElementById('input')
    const value = input.value.trim()
    input.value = ''
    return value
  }

  function addToStateValue() {
    const value = getInputValue()
    if (!value) {
      alert('Пустое значение!!!')
      return
    }
    dispatch(addItemToList(value))
  }

  function checkEnterAndAdd(e) {
    if (e.key === 'Enter') {
      addToStateValue()
    }
  }

  function removeItemFromState(e) {
    const target = e.target.closest('.list__item').querySelector('.list__text').textContent
    dispatch(removeItemFromList(target))
  }


  function checkHandler(e) {
    if (e.target.checked) {
      e.target.parentNode.classList.add('checked')
    } else {
      e.target.parentNode.classList.remove('checked')
    }
  }


  return (
    <div className="App">

      <header className="header">
        <h1 className="header__title">Список дел</h1>
        <div className="header__block">
          <input onKeyDown={checkEnterAndAdd} id="input" className="header__input" type="text" />
          <button onClick={addToStateValue} className="header__button button">+</button>
        </div>
      </header>

      <ul id="list" className="list">

        {
          tasks.map((item, index) => {
            return (
              <li key={index} className="list__item">
                <input onChange={checkHandler} type="checkbox" className="list__checkbox"/>
                <p className="list__text">{item}</p>
                <button onClick={removeItemFromState} className="list__remove button">&#128465;</button>
              </li>
            )
          })
        }

      </ul>
    </div>
  )
}

/*
<li className="list__item">
  <input onChange={checkHandler} type="checkbox" className="list__checkbox"/>
  <p className="list__text">Что</p>
  <button className="list__remove button"><i className="fas fa-trash" /></button>
</li>
*/


export default App
