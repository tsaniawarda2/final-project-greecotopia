import React from "react";
import "../../assets/styles/documentations.css"

export default function Documentations() {
  return (
    <>
      <div className="container-docs">
        <div className="doc-text">
          <h1>Dokumentasi <span>Tanam Pohon</span></h1>
        </div>
        <div className="all-docs">
          <div className="documentations">
            <div className="image-docs">
              <div className="docs-icon">
                <i class="far fa-images fa-2x"></i>
              </div>
              <img src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <p className="total-picts">(10 Foto)</p>
            <h3 className="doc-title-tp">Tanam Pohon untuk Papua yang lebih hijau</h3>
          </div>
        </div>
      </div>
    </>
  );
}