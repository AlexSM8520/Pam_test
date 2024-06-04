import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootState } from '../../store';
import TaskItem from '../../components/TaskItem';
import { addItem } from '../../slice/itemSlice';

const TaskView: React.FC = () => {
  const [newItem, setNewItem] = useState<string>('');
  const items = useSelector((state: RootState) => state.items.items);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleClickAdd = () => {
    if (newItem.trim().length > 0) {
      dispatch(addItem(newItem));
      setNewItem('');
      setIsOpen(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => setIsOpen(true)}>
        <Text style={styles.addButtonText}>Add New Task</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.itemList}>
          {items.map((item, index) => (
            <TaskItem key={index} text={item} />
          ))}
        </View>
      </ScrollView>

      <Modal visible={isOpen} transparent={true} onRequestClose={() => setIsOpen(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Add New Task</Text>
            <TextInput
              placeholder="Enter task"
              value={newItem}
              onChangeText={setNewItem}
              style={styles.input}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleClickAdd}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  addButton: {
    backgroundColor: '#004558',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemList: {
    flexDirection: 'column',
    justifyContent: 'center',
    width:"100%",
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});

export default TaskView;
