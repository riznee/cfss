export abstract class AbstractStorageService {
  protected abstract type: string;

  addItem(item) {
    let list = this.getList();
    let lastId = list[list.length - 1].id;
    item.id = lastId + 1;

    list.push(item);
    this.storeList(list);
  }

  removeItem(index) {
    let list = this.getList();
    list.splice(index, 1);

    this.storeList(list);
  }

  getList() {
    let list = JSON.parse(localStorage.getItem(this.type));
    return list ? list : [];
  }

  storeList(list) {
    localStorage.setItem(this.type, JSON.stringify(list));
  }
}
