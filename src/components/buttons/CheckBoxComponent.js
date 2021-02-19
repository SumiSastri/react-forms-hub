//   onCheckboxChange(key, event) {
//         this.onChangeFilter(key, event.target.checked);
//     }

//     buildCheckboxField(k, value, type) {
//         return <div key={ 'filter-' + k } className='form__field'>
//             <input
//                 type='checkbox'
//                 name={ k }
//                 id={ k }
//                 checked={ value || false }
//                 onChange={ this.onCheckboxChange.bind(null, type + ':' + k) }
//             />
//             <label htmlFor={ k }>{ this.props.t('allocation:filter-' + k) }</label>
//         </div>;
//     }
