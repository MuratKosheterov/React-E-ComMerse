import React from "react";

function NoPage() {
  return (
    <div className="NoPage">
      <div className="container">
        <div className="row pt-5 ">
          <div className="col pt-5 ">
            <h1 className="display-1 not-found">Ошибка 404</h1>
            <p>
              {" "}
              Кажется что-то пошла не так! Страница которую вы запрашиваете не
              существует. Возможно это устарело был удалена или был введен
              неверный адрес в адресной строке{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoPage;
