import React from 'react'
import Button from '@atlaskit/button';
import styled, { css } from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';
import EditorDoneIcon from '@atlaskit/icon/glyph/editor/done';
import BitbucketSourceIcon from '@atlaskit/icon/glyph/bitbucket/source';
import EditorExpandIcon from '@atlaskit/icon/glyph/editor/expand';
import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close';
import Textfield from '@atlaskit/textfield';
// import InlineEdit from '@atlaskit/inline-edit';
// import useState from 'react';

const ButtonStyled = styled(Button)
`
    margin-top: 10px;
    text-align: left;
    .textedit {
        width: calc(100% - 150px);
        position: absolute;
    }
    .list-task {
        width: 100%;
        border: none;
        border-bottom: 1px dashed;
        border-radius: 0;
        float: left;
    }
    ${p => p.isEdited && css`
        .textedit {
            display: none;
            opacity: 0;
        }
    `}
    .done-icon {
        display: inline-block;
        cursor: pointer;
        margin-top: 6px;
        background-color: #00f;
        border-radius: 50%;
        width: 25px;
        height: 25px;
    }
    .check-icon {
        position: relative;
        box-shadow: inset 0 0 0 2px #00324a;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        span {
            svg {
                opacity: 0;
                width: 38px;
                height: 38px;
                transition: 0.5s;
            }
        }
        &:hover {
            box-shadow: inset 0 0 0 2px #00f;
            span {
                svg {
                    opacity: 1;
                    width: 38px;
                    height: 38px;
                }
            }
        }
    }
    .after-icon {
        .close-icon {
            // display: none;
            opacity: 0;
            transition: 0.3s;
        }
        .move-icon {
            display: inline-block;
            transform: rotate(90deg);
            cursor: move;
        }
    }
    
    ${p => p.isCompleted && css`
        text-decoration: line-through;
        .check-icon {
            box-shadow: inset 0 0 0 2px #00f;
            span {
                color: #00f;
                svg {
                    opacity: 1;
                    width: 38px;
                    height: 38px;
                }
            }
        }
    `}
    &:hover{
        .check-icon {
            box-shadow: inset 0 0 0 2px #00f;
            span {
                color: #f00;
            }
        }
        
        text-decoration: none;
        -webkit-transition: background 0.1s ease-out,box-shadow 0.15s cubic-bezier(0.47,0.03,0.49,1.38);
        transition: background 0.1s ease-out,box-shadow 0.15s cubic-bezier(0.47,0.03,0.49,1.38);
        white-space: nowrap;
        background: var(--ds-background-subtleNeutral-resting,rgba(9,30,66,0.04));
        color: var(--ds-text-highEmphasis,#42526E) !important;
        .close-icon {
            // display: inline-block;
            opacity: 1;
        }
        ${p => p.isCompleted && css`
            text-decoration: line-through;
            .check-icon {
                box-shadow: inset 0 0 0 2px #f00;
                span {
                    color: #f00;
                }
            }
        `}
    }
`;
export default function Todo({ todo, onCheckBtnClick, onInputComlpeted, onTaskChange, onInputStartEditor}) {
    // const [editValue, setEditValue] = useState('');
    return (
        <>
            <ButtonStyled shouldFitContainer
                isCompleted={todo.isCompleted}
                isEdited={todo.isEdited}
                iconBefore={
                    // !todo.isCompleted ? (
                    //     <span className='check-icon' onClick={() => onCheckBtnClick(todo.id)}>
                    //         <CheckIcon primaryColor='#EA5454' />
                    //     </span>    
                    // ) : (
                        <span className='check-icon' onClick={() => onCheckBtnClick(todo.id)}>
                            <CheckIcon />
                        </span>    
                    // )
                }
                iconAfter={
                    <div className='after-icon'>
                        <span className='close-icon'>
                            <EditorCloseIcon primaryColor='#00324A' />
                        </span>
                        <span className='move-icon'>
                            <EditorExpandIcon primaryColor='#00324AC7' />
                        </span>
                    </div>
                }
            >
                <div className='textedit'>
                    <Textfield placeholder = "neue Aufgabe..."
                    className='list-task'
                    css = { { padding: '5px 10px' } }
                    value = { todo.name }
                    onChange = {(e) => onTaskChange(todo.id, e.target.value)}
                    >
                    </Textfield>
                    <span className='done-icon' onClick={(e) => onInputComlpeted(todo.id)}>
                        <EditorDoneIcon primaryColor='#fff' />
                    </span>
                </div>
                <span className='textview' onClick={(e) => onInputStartEditor(todo.id)}>
                    { todo.name }
                </span>
            </ButtonStyled>
                
            
        </>
    )
}