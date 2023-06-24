import React, { useRef } from 'react'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
export default function ProfesorDeleteCurso({visibleDelete,setVisibleDelete,nombreCurso='',deleteCurso,formik}) {
    const toast = useRef(null);
    const accept = () => {
      deleteCurso(formik.values.id);
        toast.current.show({ severity: 'success', summary: 'Confirmed', detail: 'Se elimino el curso correctamente', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'Eliminación cancelada', life: 3000 });
    }
  return (
    <>
        <Toast ref={toast} />
        <ConfirmDialog visible={visibleDelete} onHide={() => setVisibleDelete(false)} message={`Seguro de eliminar el Curso ${nombreCurso}`}
                header="Eliminacion del Curso" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} acceptClassName='p-button-danger' rejectClassName='p-button-success'/>
    </>
  )
}
