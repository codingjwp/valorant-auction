import styled from "styled-components";

export interface FileUploadProps {
  baseContnet?: string,
}

export const FileUploadBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #D41E1E;
  width: 100%;
  height: 50px;
  background-color: #323232;
  color: #f5f5f5;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
`