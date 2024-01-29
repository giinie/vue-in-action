import { shallowMount } from '@vue/test-utils';
import MyForm from '@/components/Form.vue';

describe('MyForm.vue', () => {
  it('버튼을 눌렀을 때 madeOrder가 true가 되는지 확인', () => {
    const wrapper = shallowMount(MyForm);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.madeOrder).toBe(true);
  });

  it('initializes with correct elements', () => {
    const wrapper = shallowMount(MyForm);

    expect(wrapper.vm.order.firstName).toBe('');
    expect(wrapper.vm.order.lastName).toBe('');
    expect(wrapper.vm.order.address).toBe('');
    expect(wrapper.vm.order.city).toBe('');
    expect(wrapper.vm.order.zip).toBe('');
    expect(wrapper.vm.order.state).toBe('');
    expect(wrapper.vm.order.method).toBe('자택');
    expect(wrapper.vm.order.gift).toBe('');
    expect(wrapper.vm.madeOrder).toBe(false);
  });

  it('submits the form correctly', async () => {
    const wrapper = shallowMount(MyForm);

    await wrapper.find('button[type="submit"]').trigger('click');

    expect(wrapper.vm.madeOrder).toBe(true);
  });

  it('handles input correctly', async () => {
    const wrapper = shallowMount(MyForm);

    await wrapper.find('#firstName').setValue('John');
    await wrapper.find('#lastName').setValue('Doe');
    await wrapper.find('#address').setValue('123 Main St');
    await wrapper.find('#city').setValue('Anytown');
    await wrapper.find('#zip').setValue(12345);
    await wrapper.find('#state').setValue('알라바마');
    await wrapper.find('#home').setChecked();
    await wrapper.find('#gift').setChecked();

    expect(wrapper.vm.order.firstName).toBe('John');
    expect(wrapper.vm.order.lastName).toBe('Doe');
    expect(wrapper.vm.order.address).toBe('123 Main St');
    expect(wrapper.vm.order.city).toBe('Anytown');
    expect(wrapper.vm.order.zip).toBe(12345);
    expect(wrapper.vm.order.state).toBe('알라바마');
    expect(wrapper.vm.order.method).toBe('자택 주소');
    expect(wrapper.vm.order.gift).toBe('선물로 보내기');
  });
});
