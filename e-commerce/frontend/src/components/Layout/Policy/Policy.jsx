import "./Policy.css"

const Policy = () => {
  return (
    <section className="policy">
    <div className="container">
      <ul className="policy-list">
        <li className="policy-item">
          <i className="bi bi-truck"></i>
          <div className="policy-texts">
            <strong>GÜVENLİ TESLİMAT</strong>
            <span>Sektörün bilinen kargo firmaları ile aynı gün kargo çıkışı sağlayabiliyoruz</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-headset"></i>
          <div className="policy-texts">
            <strong>DESTEK</strong>
            <span>Canlı destek sunuyoruz</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-arrow-clockwise"></i>
          <div className="policy-texts">
            <strong>GÜVENLİ İADE</strong>
            <span>İade</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-credit-card"></i>
          <div className="policy-texts">
            <strong>ÖDEME YÖNTEMİ</strong>
            <span>Güvenli Ödeme</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Policy;