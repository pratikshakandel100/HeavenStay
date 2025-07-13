import React, { useState } from 'react';
import { CreditCard, DollarSign, Calendar, Download, Eye, Plus, User } from 'lucide-react';
import Button from '../../components/Hoteler/common/Button';
import Modal from '../../components/Hoteler/common/Modal';

const HotelerPayments = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'Pay at Hotel',
      name: 'Cash Payment',
      details: 'Accept cash payments at check-in',
      status: 'Active',
      primary: true
    },
    {
      id: 2,
      type: 'eSewa',
      name: 'eSewa Digital Wallet',
      details: 'ID: 9841234567',
      status: 'Active',
      primary: false,
      esewaId: '9841234567',
      accountName: 'Grand Paradise Resort'
    }
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2024-01-15',
      type: 'Booking Payment',
      guest: 'Sarah Johnson',
      guestPhone: '+977-9841234567',
      amount: 15000,
      status: 'Completed',
      method: 'eSewa',
      paymentId: 'ESW123456789',
      roomType: 'Deluxe Room',
      nights: 3
    },
    {
      id: 2,
      date: '2024-01-14',
      type: 'Booking Payment',
      guest: 'Michael Chen',
      guestPhone: '+977-9876543210',
      amount: 42000,
      status: 'Completed',
      method: 'Pay at Hotel',
      paymentId: 'CASH001',
      roomType: 'Suite',
      nights: 4
    },
    {
      id: 3,
      date: '2024-01-13',
      type: 'Booking Payment',
      guest: 'Emma Wilson',
      guestPhone: '+977-9812345678',
      amount: 21000,
      status: 'Pending',
      method: 'eSewa',
      paymentId: 'ESW987654321',
      roomType: 'Standard Room',
      nights: 6
    },
    {
      id: 4,
      date: '2024-01-12',
      type: 'Refund',
      guest: 'David Rodriguez',
      guestPhone: '+977-9823456789',
      amount: -7000,
      status: 'Completed',
      method: 'eSewa',
      paymentId: 'ESW456789123',
      roomType: 'Standard Room',
      nights: 2
    }
  ]);

  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [newPaymentMethod, setNewPaymentMethod] = useState({
    type: '',
    esewaId: '',
    accountName: ''
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddPaymentMethod = () => {
    if (newPaymentMethod.type === 'eSewa' && newPaymentMethod.esewaId && newPaymentMethod.accountName) {
      const newMethod = {
        id: Date.now(),
        type: 'eSewa',
        name: 'eSewa Digital Wallet',
        details: `ID: ${newPaymentMethod.esewaId}`,
        status: 'Active',
        primary: false,
        esewaId: newPaymentMethod.esewaId,
        accountName: newPaymentMethod.accountName
      };
      setPaymentMethods([...paymentMethods, newMethod]);
      setNewPaymentMethod({ type: '', esewaId: '', accountName: '' });
      setShowAddPaymentModal(false);
    }
  };

  const viewTransactionDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setShowTransactionModal(true);
  };

  const totalRevenue = transactions
    .filter(t => t.status === 'Completed' && t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const pendingAmount = transactions
    .filter(t => t.status === 'Pending')
    .reduce((sum, t) => sum + t.amount, 0);

  const esewaTransactions = transactions.filter(t => t.method === 'eSewa' && t.status === 'Completed' && t.amount > 0);
  const esewaRevenue = esewaTransactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Payment Management</h2>
          <p className="text-gray-600 mt-1">View customer payments and manage payment methods</p>
        </div>
        <Button 
          onClick={() => setShowAddPaymentModal(true)}
          style={{ backgroundColor: '#437057' }}
          className="hover:opacity-90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Payment Method
        </Button>
      </div>

      {/* Payment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">Rs. {totalRevenue.toLocaleString()}</p>
            </div>
            <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#97B06720' }}>
              <DollarSign className="h-6 w-6" style={{ color: '#97B067' }} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Payments</p>
              <p className="text-2xl font-bold text-gray-900">Rs. {pendingAmount.toLocaleString()}</p>
            </div>
            <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">eSewa Revenue</p>
              <p className="text-2xl font-bold text-gray-900">Rs. {esewaRevenue.toLocaleString()}</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cash Payments</p>
              <p className="text-2xl font-bold text-gray-900">
                Rs. {(totalRevenue - esewaRevenue).toLocaleString()}
              </p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-gray-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{method.name}</p>
                  <p className="text-sm text-gray-500">{method.details}</p>
                  {method.accountName && (
                    <p className="text-xs text-gray-400">Account: {method.accountName}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {method.primary && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    Primary
                  </span>
                )}
                <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(method.status)}`}>
                  {method.status}
                </span>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Payment History */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Customer Payment History</h3>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guest Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{transaction.guest}</div>
                        <div className="text-sm text-gray-500">{transaction.guestPhone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transaction.roomType}</div>
                    <div className="text-sm text-gray-500">{transaction.nights} nights</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <span className={transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}>
                      Rs. {Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.method}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => viewTransactionDetails(transaction)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Payment Method Modal */}
      <Modal
        isOpen={showAddPaymentModal}
        onClose={() => setShowAddPaymentModal(false)}
        title="Add Payment Method"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method Type
            </label>
            <select
              value={newPaymentMethod.type}
              onChange={(e) => setNewPaymentMethod(prev => ({ ...prev, type: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select payment method</option>
              <option value="eSewa">eSewa</option>
            </select>
          </div>

          {newPaymentMethod.type === 'eSewa' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  eSewa ID
                </label>
                <input
                  type="text"
                  value={newPaymentMethod.esewaId}
                  onChange={(e) => setNewPaymentMethod(prev => ({ ...prev, esewaId: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your eSewa ID"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Name
                </label>
                <input
                  type="text"
                  value={newPaymentMethod.accountName}
                  onChange={(e) => setNewPaymentMethod(prev => ({ ...prev, accountName: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter account holder name"
                />
              </div>
            </>
          )}

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              onClick={() => setShowAddPaymentModal(false)}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddPaymentMethod}
              style={{ backgroundColor: '#437057' }}
              className="hover:opacity-90"
              disabled={!newPaymentMethod.type || (newPaymentMethod.type === 'eSewa' && (!newPaymentMethod.esewaId || !newPaymentMethod.accountName))}
            >
              Add Payment Method
            </Button>
          </div>
        </div>
      </Modal>

      {/* Transaction Details Modal */}
      <Modal
        isOpen={showTransactionModal}
        onClose={() => setShowTransactionModal(false)}
        title="Transaction Details"
      >
        {selectedTransaction && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Transaction ID</label>
                <p className="text-sm text-gray-900">{selectedTransaction.paymentId}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <p className="text-sm text-gray-900">{new Date(selectedTransaction.date).toLocaleDateString()}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Guest Name</label>
                <p className="text-sm text-gray-900">{selectedTransaction.guest}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <p className="text-sm text-gray-900">{selectedTransaction.guestPhone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Room Type</label>
                <p className="text-sm text-gray-900">{selectedTransaction.roomType}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Nights</label>
                <p className="text-sm text-gray-900">{selectedTransaction.nights}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                <p className="text-sm text-gray-900">{selectedTransaction.method}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <p className={`text-sm font-medium ${selectedTransaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  Rs. {Math.abs(selectedTransaction.amount).toLocaleString()}
                </p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedTransaction.status)}`}>
                {selectedTransaction.status}
              </span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HotelerPayments;