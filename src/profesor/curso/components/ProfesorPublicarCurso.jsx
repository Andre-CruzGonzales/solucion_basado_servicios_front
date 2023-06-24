import React, { useRef } from 'react'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
export default function ProfesorPublicarCurso({visiblePublicar,setVisiblePublicar,nombreCurso='',updateCurso,formik}) {
    const toast = useRef(null);
    const accept = () => {
        toast.current.show({ severity: 'success', summary: 'Confirmed', detail: 'Se Publico el curso correctamente', life: 3000 });
        updateCurso(formik.values.id,formik.values);
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'Publicación cancelada', life: 3000 });
    }
  return (
    <>
        <Toast ref={toast} />
        <ConfirmDialog visible={visiblePublicar} onHide={() => setVisiblePublicar(false)} message={`Seguro de publicar el Curso ${nombreCurso}`}
                header="Publicacion del Curso" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} acceptLabel='Si' acceptClassName='p-button-success' rejectClassName='p-button-warning'/>
    </>
  )
}
