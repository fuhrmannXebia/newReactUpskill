import { InvoiceItemProps } from "./models/InvoiceItemProps";
import { useNavigate } from "react-router-dom";
import styles from './InvoiceItem.module.css'
import { format } from 'date-fns';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const InvoiceItem: React.FC<InvoiceItemProps> = ({
  invoice,
  onDelete,
}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/invoice/${invoice.id}`);
  };

  const totalAmount = invoice.items.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  const formatDate = (date: Date | null) => {
    return date ? format(new Date(date), 'dd/MM/yyyy') : 'N/A';
  };

  return (
    <div className={styles.itemContainer}>
      <div>{invoice.invoiceNumber}</div>
      <div>{formatDate(invoice.createdDate)}</div>
      <div>{formatDate(invoice.validUntilDate)}</div>
      <div>{totalAmount}</div>
      <div className={styles.iconsContainer}>
        <button className={styles.iconButton} onClick={handleEdit}>
          <EditIcon />
        </button>
        <button className={styles.iconButton} onClick={() => onDelete(invoice.id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default InvoiceItem;
