import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';

export default class TodoListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastKey: 4,
      todoList: [
        {
          key: '1',
          title: '部屋の掃除をする',
          memo: '机の上も片付ける',
        },
        {
          key: '2',
          title: 'つけ麺を食べる',
          memo: '茹で時間２分',
        },
        {
          key: '3',
          title: 'ゴミを捨てる',
          memo: 'ペットボトルも処分',
        },
        {
          key: '4',
          title: 'CDの整理',
          memo: 'インポートする',
        },
      ],
    };
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }
  tapAddButton() {
    const key = this.state.lastKey + 1;
    this.setState({listKey: key});
    this.props.navigation.navigate('AddTodo', {
      callback: this.addItem,
      key: `${key}`,
    });
  }
  tapEditButton(editItem) {
    console.log(`editItem.key=${editItem.key}`);
    this.props.navigation.navigati('AddTodo', {
      callback: this.editItem,
      editItem,
    });
  }
  addItem(item) {
    console.log(`addItem item.key=${item.key} title=${item.title}`);
    let {todoList} = this.state;
    todoList.push(item);
    this.setState({
      todoList: todoList.map(item => item),
    });
  }
  editItem(updateItem) {
    let {todoList} = this.state;
    const i = todoList.findIndex(item => item.key === updateItem.key);
    todoList[i] = updateItem;
    this.setState({todoList: todoList.map(item => item)});
  }
  render() {
    const {todoList} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={todoList}
          renderItem={({item}) => {
            return (
              <View style={styles.itemCell}>
                <Text>
                  {item.key}.{item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#888',
                  }}>
                  {item.memo}
                </Text>
                <Button title="編集" onPress={() => this.tapEditButton(item)} />
              </View>
            );
          }}
        />
        <Button title="追加" onPress={() => this.tapAddButton()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5F5F5',
  },
  itemCell: {
    flex: 1,
    width: '100%',
    padding: 20,
    margin: 2,
    backgroundColor: '#FFFFFF',
  },
});
